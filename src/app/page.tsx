'use client';

import { useState } from 'react';
import Image from "next/image";

export default function Home() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try{
      let response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      if(response.ok){
        setMessage("Thank you for joining the list 🚀");
        setEmail("");
      }
      else{
        setMessage("Error while joining the waitlis, please try again later.");
  
      }
    }
    catch(error){
      console.error(error)
      setMessage("Error while joining the waitlist, please try again later.");
    }

    finally{
      setIsLoading(false);
    }


  };

  const CircularProgress = () => {
  const _className = `animate-spin rounded-full border-1 border-gray-300 border-t-blue-600 w-6 h-6 m-0 p-0`
  return (
    <div className={_className}>
    </div>
  );

}
  

  return (
<>

<section className="hero">
  <h1>Sync GitHub & GitLab Automatically</h1>
  <p>
    Nexora connects your repositories between GitHub and GitLab instantly.
    No manual push. No duplicate work. Just seamless sync.
  </p>
  <a href="#waitlist" className="btn">Join the Waitlist</a>
</section>

<section className="section">
  <h2>Why Nexora?</h2>
  <div className="features">
    <div className="feature">
      <h3>🔄 Auto Sync</h3>
      <p>Push to GitHub and automatically mirror to GitLab.</p>
    </div>
    <div className="feature">
      <h3>🔐 Secure Webhooks</h3>
      <p>Signed and verified events for secure repository duplication.</p>
    </div>
    <div className="feature">
      <h3>⚡ Fast Setup</h3>
      <p>Connect your accounts and sync in seconds.</p>
    </div>
  </div>
</section>

<section id="waitlist" className="waitlist">
  <h2>Join the Waitlist</h2>
  <p>Be the first to access Nexora when we launch.</p>
  <form onSubmit={handleSubmit} className=" max-h-[80px] flex justify-center items-center gap-2 rounded-lg overflow-hidden">
    <input type="email" placeholder="Enter your email" required         
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
    <button disabled={isLoading} type="submit" className="btn">
      {
        isLoading ? <CircularProgress  /> : "Join"
      }
      </button>
  </form>
  <p style={{ marginTop:"20px" }}>{message}</p>
</section>

<footer>
  © {new Date().getFullYear()} Nexora. Built for developers.
</footer>

</>
  );
}
