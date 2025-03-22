import React from "react";

type Props = {
  params: {
    bankid: string;
    paymentid: string;
  };
  searchParams?: {
    data?: string; // Made optional to prevent errors if undefined
  };
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props) {
  return {
    title: `Payment System - Bank ${params.bankid}`,
  };
}

export default function Payment({ params, searchParams = {} }: Props) {
  const { bankid, paymentid } = params;
  const paymentStatus = searchParams.data ?? "Unknown";

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-800 text-white px-6">
      <h1 className="text-3xl font-bold">Payment System</h1>
      <div className="mt-6 space-y-4 text-lg">
        <p>
          <strong>Bank ID:</strong> {bankid}
        </p>
        <p>
          <strong>Payment ID:</strong> {paymentid}
        </p>
        <p>
          <strong>Payment Status:</strong> {paymentStatus}
        </p>
      </div>
    </div>
  );
}
