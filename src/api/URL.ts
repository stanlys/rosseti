const PORT = 3006;

export const API_ENDPOINTS = {
  BASE: `http://localhost:${PORT}`,
  LETTER: "letter",
  LETTER_BY_ID(id: string): string {
    return this.LETTER + `/${id}`;
  },
  INCOMING: "incoming",
  OUTGOING: "outletter",
  OUTGIONG_BY_ID(id: string): string {
    return this.OUTGOING + `/${id}`;
  },
  DELIVERY: "delivery",
  DELIVERY_BY_ID(id: string): string {
    return this.DELIVERY + `/${id}`;
  },
  UPLOAD(): string {
    return `${this.BASE}/upload`;
  },
};
