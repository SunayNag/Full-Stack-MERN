import React from "react";

function userCard({name, email}) {
    name = "Sunay Nagpure";
    email = "hello@gmail.com";
    return(
        <div className="p-4 mt-8 flex flex-col items-center justify-self-center min-h-10 bg-[#3D8D7A] w-150 border rounded-xl">
            <div className="px-4 py-2 text-2xl text-[#FBFFE4]">
                {name}
            </div>
            <div className="px-4 py-2 text-l text-[#FBFFE4]">
                {email}
            </div>

        </div>
    )
}

export default userCard;