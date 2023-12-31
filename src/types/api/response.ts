export interface APIResponse<T> {
    status: string
    statusCode: number
    message?: string
    data?: T | undefined
  }
  
  export interface PaginationData<T> {
    limit: number
    page: number
    sort: string
    total_rows: number
    total_pages: number
    rows: T[] | null
  }
  