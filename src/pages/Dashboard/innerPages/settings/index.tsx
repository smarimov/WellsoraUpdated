import { Button } from "@/components/Button";
import { Input } from "@/components/Form";
import NavbarWrapper from "@/components/navbar";

const Settings = () => {
  return (
    <>
      <NavbarWrapper title="Settings" setting />
      <div className="p-5 w-full max-w-[1500px] flex gap-5">
        <div>
          <div className="w-[320px] h-[325px] mb-6 bg-[#EFF8FC] rounded flex flex-col items-center justify-center">
            <div className="rounded-[100%] overflow-hidden w-[200px] h-[200px] mb-4">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH&w=474&h=474&c=7"
                className="object-cover"
              />
            </div>
            <span className="mb-2 text-lg font-bold text-Purple-main">
              User Name
            </span>
            <span className="text-sm font-bold text-[#878787]">
              user@email.com
            </span>
          </div>
          <div className="w-[320px] py-5 px-6 bg-[#EFF8FC] rounded flex flex-col gap-3">
            <span className="mb-2 text-lg font-bold ">Information</span>
            <div className="flex gap-2">
              <span className="text-base font-medium min-w-12">Name:</span>{" "}
              <span className="float-right font-normal">Gandi</span>
            </div>
            <div className="flex gap-2">
              <span className="text-base font-medium min-w-12">Email:</span>{" "}
              <span className="float-right font-normal">user@email.com</span>
            </div>
            <div className="flex gap-2">
              <span className="text-base font-medium min-w-12">Tel:</span>
              <span className="float-right font-normal">+1 202 456 11 11</span>
            </div>
            <div className="flex gap-2">
              <span className="text-base font-medium min-w-12">Plan:</span>
              <span className="float-right font-normal">Hardcoded</span>
            </div>

            <span className="mb-2 text-lg font-bold ">Information</span>
            <div className="flex gap-2">
              <span className="text-base font-medium min-w-12">Plan:</span>
              <span className="float-right font-normal">Hardcoded</span>
            </div>
            <div className="flex gap-2">
              <span className="text-base font-medium min-w-12">
                Notifications:
              </span>
              <span className="float-right font-normal">some</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-5 border border-[#E6E8EB] rounded">
          <p className="text-xl font-extrabold mb-7">Change Settings</p>
          <div className="flex flex-col flex-1 gap-7">
            <div>
              <p className="mb-3 text-lg font-bold">Account Information</p>
              <div className="flex items-center gap-3">
                <Input placeholder="First Name" className="w-full" />
                <Input placeholder="Last Name" className="w-full" />
                <Input placeholder="Tel - Number:" className="w-full" />
              </div>
            </div>
            <div>
              <p className="mb-3 text-lg font-bold">Email</p>
              <div className="flex items-center gap-3">
                <Input placeholder="New Email" className="w-full" />
                <Input placeholder="Enter Password" className="w-full" />
                <Button color="primary" className="text-nowrap">
                  Change Email
                </Button>
              </div>
            </div>
            <div>
              <p className="mb-3 text-lg font-bold">Password</p>
              <div className="flex items-center gap-3">
                <Input placeholder="New Email" className="w-full" />
                <Input placeholder="Enter Password" className="w-full" />
                <Button color="primary" className="text-nowrap">
                  Change Password
                </Button>
              </div>
            </div>

            <div className="flex flex-col flex-1 gap-4">
              <span>Email Notification:</span>
              <span>Phone Notification:</span>
              <span>Push Notification:</span>
            </div>
            <div className="flex gap-3">
              <Button> Save Changes</Button>
              <Button variant="outline"> Forgot your password?</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
