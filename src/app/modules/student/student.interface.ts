export type TStudent = {
  id?: number;
  first_name: string;
  middle_name?: string | null;
  last_name: string;
  email: string;
  phone?: string | null;
  department?: string | null;
  roll_no?: string | null;
  date_of_birth?: string | null;
  gender?: "Male" | "Female" | "Other" | null;
  address?: string | null;
  created_at?: Date | string;
  updated_at?: Date | string;
};
