export type TReport = {
  id?: number;
  title: string;
  description?: string;
  report_date?: string; // e.g., "2025-11-10"
  total_books?: number;
  total_borrowed?: number;
  total_overdue?: number;
  created_at?: Date;
  updated_at?: Date;
};
