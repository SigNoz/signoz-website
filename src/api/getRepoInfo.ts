import { ErrorResponseHandler } from "api/ErrorResponseHandler";
import axios, { AxiosError } from "axios";
import { ErrorResponse, SuccessResponse } from "types/api";
import { CountPayload } from "types/api/getGitCount";

const getLatestVersion = async (): Promise<
  SuccessResponse<CountPayload> | ErrorResponse
> => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/signoz/signoz`
    );

    return {
      statusCode: 200,
      error: null,
      message: response.data.status,
      payload: response.data,
    };
  } catch (error) {
    return ErrorResponseHandler(error as AxiosError);
  }
};

export default getLatestVersion;
