// complete status: incomplete
// responsive status: incomplete
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from "react"
const MainSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState([]);




  const [formData, setFormData] = useState({
    website: "",
    username: "",
    password: ""
  });

  // use effects for fetching data from mongo db storage



  useEffect(() => {

    const fetchData = async () => {
      const req = await fetch("http://localhost:3000/");
      const data = await req.json();
      return data;
    }

    fetchData().then((data) => {
      setPassword(data);
    })

  }, [password]);

  // funtions  for sending password 

  const submitForm = async () => {
    const res = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)

      
    });
    const data = await res.json();
    console.log("data from server", data);

    setFormData({
      website: "",
      username: "",
      password: ""
    });
    
  }





  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  
  // for copying text to clipboard
  const copyText = (text) => {
    toast(`✅ copied to clipboard!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  }

  return (
    <>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

      <div className="my-15 p-2  lg:p-4 flex flex-col gap-10">


        <div className='lg:w-full flex justify-center h-20 items-center text-center flex-col ' >
          <h1 className='text-2xl font-bold'>Pass<span className='text-green-400'>Op</span></h1>
          <p>your own password manager</p>
        </div>

        <div className="lg:w-3/4 w-full mx-auto  flex flex-col gap-5">
          <div>
            <input type="text" className=" rounded-full border-2 border-green-400  px-3 py-1  w-full " name="website" id="website" placeholder="Enter Website Url" onChange={handleChange} value={formData.website} />
          </div>

          <div className="flex flex-col lg:flex-row gap-4 ">
            <input type="text" className=" rounded-full border-2 border-green-400  px-3 py-1 lg:w-2/4  w-3/4 " name="username" id="name" placeholder="Enter UserName" onChange={handleChange} value={formData.username} />


            <div className="flex gap-3 w-full">


              <input type={showPassword ? "text" : "password"} className="rounded-full border-2 border-green-400  px-3 py-1 w-2/4 lg:w-1/4 " name="password" id="password" placeholder="Password" onChange={handleChange} value={formData.password} />

              <div className=" flex justify-center items-center cursor-pointer" onMouseDown={() => { setShowPassword(true) }} onMouseUp={() => setShowPassword(false)} >
                <img src="/hide.svg" alt=" see password" width={25} height={25} />
              </div>
            </div>
          </div>

          <div className="block">
            <button onClick={submitForm} className=" cursor-pointer flex justify-center items-center p-2.5 bg-green-400 rounded-full hover:bg-green-500">Add Password <img src="/add.svg" alt="" width={20} height={20} /></button>
          </div>
        </div>

        {password.length == 0 ? <div className='flex p-5 text-center justify-center lg:text-2xl font-bold'>
          <h1><span className='text-green-400'>Oops!</span> Looks like it's empty.</h1>
        </div> : <div className="gap-2 w-full  lg:w-3/4 lg:m-auto overflow-y-auto h-fit lg:max-h-[260px] flex-nowrap rounded-lg">
          {/* this div is for displaying save password  */}

          <table className="table-auto w-full text-center">
            <thead className="bg-green-800">

              <tr>
                <th>Website</th>
                <th>User</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead >
            <tbody className="bg-green-200">

              {password.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="lg:w-32 p-1.5 border border-white">
                      <div className="flex items-center justify-between">
                        {item.website}
                        <div className="cursor-pointer flex h-full items-center justify-center" onClick={() => copyText(item.website)}>
                          <img src="/copy.svg" alt="copy icon" width={20} height={20} />
                        </div>
                      </div>
                    </td>
                    <td className="lg:w-32 p-1.5 border border-white"><div className="flex items-center justify-between">
                      {item.username}
                      <div className="cursor-pointer flex h-full items-center justify-center" onClick={() => copyText(item.username)}>
                        <img src="/copy.svg" alt="copy icon" width={20} height={20} />
                      </div>
                    </div></td>
                    <td className="lg:w-32 p-1.5 border border-white"><div className="flex items-center justify-between">
                      {item.password}
                      <div className="cursor-pointer flex h-full items-center justify-center" onClick={() => copyText(item.password)}>
                        <img src="/copy.svg" alt="copy icon" width={20} height={20} />
                      </div>
                    </div></td>

                    <td className="lg:w-32  border border-white font-semibold">
                      <div className='flex justify-between'>

                        <div className='flex justify-between items-center cursor-pointer w-2/4 hover:bg-green-300 py-1.5 px-3'>
                          <span>Delete</span>
                          <div>
                            <img src="/delete.svg" alt="" width={20} height={20} />
                          </div>
                        </div>
                        <div className='flex justify-between items-center cursor-pointer w-2/4 hover:bg-green-300 py-1.5 px-3 '>
                          <span>Edit</span>
                          <div>
                            <img src="/edit.svg" alt="" width={15} height={15} />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}


            </tbody>
          </table>



        </div>}

      </div>

    </>
  )
}

export default MainSection;
