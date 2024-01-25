"use server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";

const s3Client = new S3Client({
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

type GetSignedURLParams = {
  fileType: string;
  fileSize: number;
  checksum: string;
};

const maxFileSize = 1048576 * 10;

const allowedFileTypes = ["image/jpeg", "image/png"];

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

export const getSignedURL = async ({
  fileType,
  fileSize,
  checksum,
}: GetSignedURLParams) => {
  if (!allowedFileTypes.includes(fileType)) {
    return { failure: "File type not allowed" };
  }

  if (fileSize > maxFileSize) {
    return { failure: "File size too large" };
  }

  const fileName = generateFileName();

  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: fileName,
    ContentType: fileType,
    ContentLength: fileSize,
    ChecksumSHA256: checksum,
  });

  const url = await getSignedUrl(s3Client, putObjectCommand, { expiresIn: 60 });

  console.log({ success: url });

  return { success: { url } };
};

// export async function getSignedURL() {
//   const putObjectCommand = new PutObjectCommand({
//     Bucket: process.env.AWS_BUCKET_NAME!,
//     Key: "test-file",
//   });

//   const url = await getSignedUrl(s3Client, putObjectCommand, { expiresIn: 60 });

//   return { success: { url } };
// }
