import { ErrorResponseHandler } from "api/ErrorResponseHandler";
import axios, { AxiosError } from "axios";
import { ErrorResponse, SuccessResponse } from "types/api";
import { CountPayload } from "types/api/getGitCount";
import { SendSubscribeEmailProps } from "types/api/sendSubscribeEmail";

const sendSubscribeEmail = async (
  props: SendSubscribeEmailProps
): Promise<SuccessResponse<CountPayload> | ErrorResponse> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_HOOK}?email=${props.email}`
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

export default sendSubscribeEmail;
