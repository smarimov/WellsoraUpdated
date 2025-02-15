import { Button } from "@/components/Button";
import { Input } from "@/components/Form";
import NavbarWrapper from "@/components/navbar";
import { TUserForm, useUserDetail } from "./useUser";
import { Loading } from "@/components/Loading";
import { useForm } from "react-hook-form";
import { FormWrapper } from "@/components/Form/FormWrapper";
import { useEffect } from "react";
import { useUserMutations } from "./useUserMutations";

const Settings = () => {
  const { data: user, isLoading, isFetching } = useUserDetail();
  const { updateMutation, isUpdating } = useUserMutations();
  const userForm = useForm<TUserForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      telephone: "",
    },
  });
  const { control, setValue } = userForm;
  const onSubmit = (data: TUserForm) => {
    updateMutation.mutate({ updatedData: data });
  };

  useEffect(() => {
    if (user != null) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("telephone", user.telephone);
    }
  }, [user, setValue]);
  return (
    <>
      <NavbarWrapper title="Settings" setting />

      <div className="relative flex justify-center w-full">
        {(isLoading || isFetching || isUpdating) && (
          <Loading
            text="Loading user details... Please wait."
            className="absolute top-44"
          />
        )}
      </div>

      {user && (
        <div className="p-5 w-full  max-w-[1500px] flex flex-col lg:flex-row gap-5">
          <div className="lg:max-w-[300px] max-w-full w-full flex-1">
            <div className=" flex-1 h-[325px] mb-6 bg-[#EFF8FC] rounded flex flex-col items-center justify-center">
              <div className="rounded-[100%] overflow-hidden w-[200px] h-[200px] mb-4">
                <img src="/assets/profile.jpeg" className="object-cover" />
              </div>
              <span className="mb-2 text-lg font-bold text-Purple-main">
                User Name
              </span>
              <span className="text-sm font-bold text-[#878787]">
                {user.email}
              </span>
            </div>
            <div className=" flex-1 py-5 px-6 bg-[#EFF8FC] rounded flex flex-col gap-3">
              <span className="mb-2 text-lg font-bold ">Information</span>
              <div className="flex gap-2">
                <span className="text-base font-medium min-w-12">Name:</span>{" "}
                <span className="float-right font-normal">
                  {user.firstName}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-base font-medium min-w-12">Email:</span>
                <span className="float-right font-normal">{user.email}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-base font-medium min-w-12">Tel:</span>
                <span className="float-right font-normal">
                  {user.telephone}
                </span>
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
            <FormWrapper methods={userForm} onSubmit={onSubmit}>
              <p className="text-xl font-extrabold mb-7">Change Settings</p>
              <div className="flex flex-col flex-1 gap-7">
                <div>
                  <p className="mb-3 text-lg font-bold">Account Information</p>
                  <div className="flex flex-col items-center gap-3 xl:flex-row">
                    <Input.Form
                      control={control}
                      name="firstName"
                      placeholder="First Name"
                      className="w-full"
                      required
                    />
                    <Input.Form
                      control={control}
                      placeholder="Last Name"
                      className="w-full"
                      required
                      name="lastName"
                    />
                    <Input.Form
                      control={control}
                      placeholder="Tel - Number:"
                      className="w-full"
                      name="telephone"
                      required
                    />
                  </div>
                </div>
                {/* <div>
                <p className="mb-3 text-lg font-bold">Email</p>
                <div className="flex flex-col items-end gap-3 xl:items-center xl:flex-row">
                  <Input placeholder="New Email" className="w-full" />
                  <Input placeholder="Enter Password" className="w-full" />
                  <Button color="primary" className="text-nowrap ">
                    Change Email
                  </Button>
                </div>
              </div> */}
                <div>
                  <p className="mb-3 text-lg font-bold">Password</p>
                  <div className="flex flex-col items-end gap-3 xl:items-center xl:flex-row ">
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
                <div className="flex flex-col gap-3 lg:flex-row">
                  <Button type="submit"> Save Changes</Button>
                  <Button variant="outline"> Forgot your password?</Button>
                </div>
              </div>
            </FormWrapper>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
