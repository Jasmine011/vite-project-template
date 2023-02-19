import request from "@/utils/request";
// import process from '@/utils/params'

export const getDogPic = () => {
  return request({
    url: "https://dog.ceo/api/breeds/image/random",
    method: "get",
  });
};
