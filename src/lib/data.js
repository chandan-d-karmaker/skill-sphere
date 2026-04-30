export const getCourses = async () =>{
    const res = await fetch('https://skill-server-89op.onrender.com/courses');
    const data = await res.json();
    return data;
}