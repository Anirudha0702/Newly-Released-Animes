// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}


export   const getData=async()=>{
  try {
    const res  =  await fetch("https://api.jikan.moe/v4/seasons/now");
     const data =  await res.json();
    return data.data;
} catch (error) {
    console.log(error);
}
  }

