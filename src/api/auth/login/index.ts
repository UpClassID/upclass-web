import { unauthorizedClient } from "@/api/apiClient";
import type { APIResponse } from "@/types/api/response";
import { TokenResponse } from "@/types/api/token";
import { UserResponse } from "@/types/api/user";

import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";

export const useLogin = () => {
    return useMutation({
        mutationFn: async ({
            email,
            password,
        }: {
            email: string;
            password: string;
        }) => {
            return await unauthorizedClient.post<
                APIResponse<{ user: UserResponse; token: TokenResponse }>
            >("/auth/login", {
                identifier: email,
                password,
            });
        },
        onSuccess: (data) => {
            if (data.data.data) {
                setCookie("access_token", data.data.data.token.access_token, {
                    expires: new Date(data.data.data.token.access_token_expired_at),
                });
                setCookie("refresh_token", data.data.data.token.refresh_token, {
                    expires: new Date(data.data.data.token.refresh_token_expired_at),
                });
            }
        },
    });
};
