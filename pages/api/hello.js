export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


export   const getData=async()=>{
  try {
    const res  =  await fetch(`${process.env.NEXT_PUBLIC_API}/seasons/now`);
     const data =  await res.json();
    return data.data;
} catch (error) {
    console.log(error);
}
  }

