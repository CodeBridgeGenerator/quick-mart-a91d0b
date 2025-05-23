import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const AddressCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
        setError({});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
          
            if (_.isEmpty(_entity?.addressId)) {
                error["addressId"] = `Address ID field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.street)) {
                error["street"] = `Street field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.city)) {
                error["city"] = `City field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.state)) {
                error["state"] = `State field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.postalCode)) {
                error["postalCode"] = `Postal Code field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.country)) {
                error["country"] = `Country field is required`;
                ret = false;
            }
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            addressId: _entity?.addressId,street: _entity?.street,city: _entity?.city,state: _entity?.state,postalCode: _entity?.postalCode,country: _entity?.country,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("address").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Address created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Address" });
        }
        setLoading(false);
    };

    

    

    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Create Address" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="address-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="addressId">Address ID:</label>
                <InputText id="addressId" className="w-full mb-3 p-inputtext-sm" value={_entity?.addressId} onChange={(e) => setValByKey("addressId", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["addressId"]) ? (
              <p className="m-0" key="error-addressId">
                {error["addressId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="street">Street:</label>
                <InputText id="street" className="w-full mb-3 p-inputtext-sm" value={_entity?.street} onChange={(e) => setValByKey("street", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["street"]) ? (
              <p className="m-0" key="error-street">
                {error["street"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="city">City:</label>
                <InputText id="city" className="w-full mb-3 p-inputtext-sm" value={_entity?.city} onChange={(e) => setValByKey("city", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["city"]) ? (
              <p className="m-0" key="error-city">
                {error["city"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="state">State:</label>
                <InputText id="state" className="w-full mb-3 p-inputtext-sm" value={_entity?.state} onChange={(e) => setValByKey("state", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["state"]) ? (
              <p className="m-0" key="error-state">
                {error["state"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="postalCode">Postal Code:</label>
                <InputText id="postalCode" className="w-full mb-3 p-inputtext-sm" value={_entity?.postalCode} onChange={(e) => setValByKey("postalCode", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["postalCode"]) ? (
              <p className="m-0" key="error-postalCode">
                {error["postalCode"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="country">Country:</label>
                <InputText id="country" className="w-full mb-3 p-inputtext-sm" value={_entity?.country} onChange={(e) => setValByKey("country", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["country"]) ? (
              <p className="m-0" key="error-country">
                {error["country"]}
              </p>
            ) : null}
          </small>
            </div>
            <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(AddressCreateDialogComponent);
