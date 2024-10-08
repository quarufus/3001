import dotenv from "dotenv";
dotenv.config();
async function GET(request) {
  request.body;
  return {
    body: {
      message: "Hello World!"
    }
  };
}
export {
  GET
};
