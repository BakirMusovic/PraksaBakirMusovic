import supabase from '../config/supabaseClient.js';

export const getUsers = async (req, res) => {
  const { data, error } = await supabase.from('user').select();
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
};
