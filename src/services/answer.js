import { post } from ".";

//提交答卷
export async function postAnswer(answerInfo) {
  const url = `/api/answer`;
  const data = await post(url, answerInfo);
  return data;
}
