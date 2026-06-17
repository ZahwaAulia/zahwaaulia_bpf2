import axios from 'axios'
import { supabase } from "../lib/supabase"

const API_URL = "https://wxuccjzxvxnmafafymxi.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4dWNjanp4dnhubWFmYWZ5bXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYxMjEsImV4cCI6MjA5NzIxMjEyMX0.GeKcnd-d_25n-IxNMrIbENU8zmJuao04jZxLHXSP05k"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
        async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}
export const fetchNotes = async () => {
  const { data, error } = await supabase
    .from("notes")
    .select("*");

  if (error) throw error;
  return data;
};