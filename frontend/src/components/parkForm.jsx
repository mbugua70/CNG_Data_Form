/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast, Slide } from "react-toastify";
import { surveyForm } from "./api";
import { OfflineContext } from "../context_offline/offline_context";
import useOnlineStatus from "../custom_hook/useOffline";

const ParkForm = () => {
  const isOnline = useOnlineStatus();
  const { addToOffline } = useContext(OfflineContext);
  const form = useForm({
    defaultValues: {
      sub_1_1: "",
      sub_1_2: "",
      sub_1_3: "",
      sub_1_4: "",
      sub_1_5: "",
      sub_1_6: "",
      sub_1_7: "",
      sub_1_8: "",
      sub_1_10: "",
      sub_1_11: "",
      sub_1_12: "",
      sub_1_13: "",
      sub_1_14: "",
      sub_1_15: "",
      sub_1_16: "",
      sub_1_17: "",
      sub_1_18: "",
    },
  });

  const { register, handleSubmit, reset, formState } = form;
  const { isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = async (data) => {
    if (isOnline) {
      console.log("online working");
      try {
        const response = await surveyForm(data);
        if (response) {
          const MySwal = withReactContent(Swal);
          MySwal.fire({
            html: <i>Your data have been submitted successfully!</i>,
            icon: "success",
          });
        }
      } catch (err) {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          html: <i>{err.message}</i>,
          icon: "error",
        });
      }
    } else {
      console.log("offline working");

      // addToOffline(data);
      // toastify
      toast.info("Failed to upload to the data !", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div className="main_body">
        <div className="row parcel_form">
          <form
            className="form"
            id="form"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1>LOCATION DETAILS</h1>

            <div className="input-field col s12">
              <span>DATE</span>
              <br />
              <input
                id="sub_1_1"
                name="sub_1_1"
                title="Date"
                type="date"
                {...register("sub_1_1")}
              />
            </div>

            <div className="input-field col s12">
              <span>Day</span>
              <br />
              <input
                id="sub_1_2"
                name="sub_1_2"
                title="Day"
                type="text"
                {...register("sub_1_2")}
              />
            </div>
            <div className="input-field col s12">
              <span>District</span>
              <br />
              <input
                id="sub_1_3"
                name="sub_1_3"
                title="District"
                type="text"
                {...register("sub_1_3")}
              />
            </div>
            <div className="input-field col s12">
              <span>LOCATION</span>
              <br />
              <input
                id="sub_1_4"
                name="sub_1_4"
                title="Location"
                type="text"
                {...register("sub_1_4")}
              />
            </div>


            <div className="input-field col s12">
              <span>Taxi Rank/Park Name</span>
              <br />
              <input
                id="sub_1_5"
                name="sub_1_5"
                title="Taxi Rank/Park Name"
                type="text"
                {...register("sub_1_5")}
              />
            </div>
            <h1>CHAIRMAN DETAILS</h1>

            <div className="input-field col s12">
              <span>1. Name of Taxi Rank Chairman</span>
              <br />
              <input
                id="sub_1_6"
                name="sub_1_6"
                title="Tax Rank Chairman"
                type="text"
                {...register("sub_1_6")}
              />
            </div>

            <div className="input-field col s12">
              <span>2. Contact of Taxi Rank Chairman</span>
              <br />
              <input
                id="sub_1_7"
                name="sub_1_7"
                title="Contacts"
                type="tel"
                {...register("sub_1_7")}
              />
            </div>
            <h1>CHAIRMAN FEEDBACK</h1>

            {/* state management */}

            <div className="input-field col s12">
              <span>1. Will You Recommend / Consider CNG for you or your friend?</span>
              <br />
              <select
                name="sub_1_8"
                id="sub_1_8"
                style={{ display: "block" }}
                {...register("sub_1_8")}
              >
                <option value="">Select your answer</option>
                <option id="yes" value="yes">
                  Yes
                </option>
                <option id="no" value="no">
                  No
                </option>

              </select>
            </div>


            <div className="input-field col s12">
              <span>2. Reason for Yes</span>
              <br />
              <input
                id="sub_1_9"
                name="sub_1_9"
                title="YES"
                type="text"
                {...register("sub_1_9")}
              />
            </div>

            <div className="input-field col s12">
              <span>3. Reason for No</span>
              <br />
              <input
                id="sub_1_10"
                name="sub_1_10"
                title="NO"
                type="text"
                {...register("sub_1_10")}
              />
            </div>

             <h1>Questionnaire</h1>

            <div className="input-field col s12">
              <span>Number of Stage</span>
              <br />
              <input
                id="sub_1_11"
                name="sub_1_11"
                title="Number of stage"
                type="text"
                {...register("sub_1_11")}
              />
            </div>

            <div className="input-field col s12">
              <span>Total Vehicle</span>
              <br />
              <input
                id="sub_1_12"
                name="sub_1_12"
                title="Total Vehicle"
                type="text"
                {...register("sub_1_12")}
              />
            </div>

            <div className="input-field col s12">
              <span>Bajaj RE</span>
              <br />
              <input
                id="sub_1_13"
                name="sub_1_13"
                title="Bajaj RE"
                type="text"
                {...register("sub_1_13")}
              />
            </div>

            <div className="input-field col s12">
              <span>TVS</span>
              <br />
              <input
                id="sub_1_14"
                name="sub_1_14"
                title="TVS"
                type="text"
                {...register("sub_1_14")}
              />
            </div>

            <div className="input-field col s12">
              <span>RE</span>
              <br />
              <input
                id="sub_1_15"
                name="sub_1_15"
                title="RE"
                type="text"
                {...register("sub_1_15")}
              />
            </div>
            <div className="input-field col s12">
              <span>Piaggio</span>
              <br />
              <input
                id="sub_1_16"
                name="sub_1_16"
                title="Piaggio"
                type="text"
                {...register("sub_1_16")}
              />
            </div>

            <div className="input-field col s12">
              <span>Atul</span>
              <br />
              <input
                id="sub_1_17"
                name="sub_1_17"
                title="Atul"
                type="text"
                {...register("sub_1_17")}
              />
            </div>

            <div className="input-field col s12">
              <span>Others</span>
              <br />
              <input
                id="sub_1_18"
                name="sub_1_18"
                title="Others"
                type="text"
                {...register("sub_1_18")}
              />
            </div>

            <div className="input-field col s12 center_it">
              <button
                className="btn-large  margin-bottom waves-effect waves-light pick_color"
                id="hide_icons"
                disabled={isSubmitting}
              >
                {isSubmitting ? <>submitting </> : <>submit </>}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ParkForm;
