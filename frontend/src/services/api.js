const API_BASE = '/api';

export const fetchProfile = async () => {
  try {
    const res = await fetch(`${API_BASE}/profile`);
    const data = await res.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
};

export const fetchProjects = async () => {
  try {
    const res = await fetch(`${API_BASE}/projects`);
    const data = await res.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const sendContactMessage = async (formData) => {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    return await res.json();
  } catch (error) {
    console.error('Error sending message:', error);
    return { success: false, message: 'Network error submitting form.' };
  }
};

export const sendChatMessage = async (question) => {
  try {
    const res = await fetch(`${API_BASE}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question })
    });
    return await res.json();
  } catch (error) {
    console.error('Error sending chat message:', error);
    return { success: false, answer: 'Sorry, I am having trouble connecting to Samvritha\'s portfolio server right now.' };
  }
};

export const getResumeDownloadUrl = () => `${API_BASE}/resume/download`;
