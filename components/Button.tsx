"use client";

import React from "react";

interface OpenInvitationButtonProps {
  onClick?: () => void;
}

export default function OpenInvitationButton({ onClick }: OpenInvitationButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-full shadow-md transition"
    >
      Buka Undangan
    </button>
  );
}
