import { Dispatch, SetStateAction, useEffect, useState } from "react";
import apiClient from "../services/api-clients";
import { AxiosRequestConfig, AxiosResponse, CanceledError } from "axios";

interface DataResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(
    endpoint: string,
    requestConfig?: AxiosRequestConfig,
    deps?: any[]
) => {
    const [data, setData]: [data: T[], setData: Dispatch<SetStateAction<T[]>>] =
        useState<T[]>([]);
    const [error, setError]: [
        error: string,
        setError: Dispatch<SetStateAction<string>>,
    ] = useState<string>("");
    const [isLoading, setIsLoading]: [
        error: boolean,
        setError: Dispatch<SetStateAction<boolean>>,
    ] = useState<boolean>(false);

    useEffect(
        () => {
            const controller = new AbortController();
            setIsLoading(true);

            apiClient
                .get<DataResponse<T>>(endpoint, {
                    signal: controller.signal,
                    ...requestConfig,
                })
                .then((res: AxiosResponse): void => {
                    setData(res.data.results);
                    setError("");
                    setIsLoading(false);
                })
                .catch((error): void => {
                    if (error instanceof CanceledError) return;
                    setError(error.message);
                    setIsLoading(false);
                });

            return () => controller.abort();
        },
        deps ? [...deps] : []
    );

    return { data, error, isLoading };
};

export default useData;
