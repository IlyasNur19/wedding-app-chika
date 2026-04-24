"use server";

import { supabase } from "@/lib/supabase";

export interface RSVPFormData {
  name: string;
  guests: number;
  attendance: "hadir" | "tidak" | "ragu";
  message: string;
}

export interface SubmitResult {
  success: boolean;
  error?: string;
}

export interface WishItem {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export async function submitRSVP(data: RSVPFormData): Promise<SubmitResult> {
  try {
    // Validate input
    if (!data.name || data.name.trim().length === 0) {
      return { success: false, error: "Nama tidak boleh kosong" };
    }

    if (!["hadir", "tidak", "ragu"].includes(data.attendance)) {
      return { success: false, error: "Status kehadiran tidak valid" };
    }

    if (data.guests < 1 || data.guests > 5) {
      return { success: false, error: "Jumlah tamu tidak valid" };
    }

    // Sanitize inputs
    const sanitizedName = data.name.trim().slice(0, 100);
    const sanitizedMessage = data.message.trim().slice(0, 500);

    // Insert RSVP
    const { error: rsvpError } = await supabase.from("rsvps").insert({
      name: sanitizedName,
      guest_count: data.guests,
      attendance: data.attendance,
    });

    if (rsvpError) {
      console.error("RSVP insert error:", rsvpError);
      return { success: false, error: "Gagal mengirim RSVP. Silakan coba lagi." };
    }

    // Insert wish/message if provided
    if (sanitizedMessage.length > 0) {
      const { error: wishError } = await supabase.from("wishes").insert({
        name: sanitizedName,
        message: sanitizedMessage,
      });

      if (wishError) {
        console.error("Wish insert error:", wishError);
        // RSVP already saved, so we return partial success
        return { success: true, error: "RSVP tersimpan, tapi ucapan gagal dikirim." };
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Submit error:", error);
    return { success: false, error: "Terjadi kesalahan. Silakan coba lagi." };
  }
}

export async function getWishes(): Promise<WishItem[]> {
  try {
    const { data, error } = await supabase
      .from("wishes")
      .select("id, name, message, created_at")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      console.error("Fetch wishes error:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("Get wishes error:", error);
    return [];
  }
}
