export type TBorrowing = {
  id?: number;
  book_id: number;
  borrower_name: string;
  borrower_email?: string;
  borrow_date?: string; // ISO string or YYYY-MM-DD
  due_date?: string;
  return_date?: string | null;
  status?: "borrowed" | "returned" | "overdue";
  created_at?: Date;
  updated_at?: Date;
};
