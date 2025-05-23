import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";


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

const AdminCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {phone:"0111111111"};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
        setError({});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
          
            if (_.isEmpty(_entity?.name)) {
                error["name"] = `Name field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.adminId)) {
                error["adminId"] = `Admin ID field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.supermarketId)) {
                error["supermarketId"] = `Supermarket ID field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.loginId)) {
                error["loginId"] = `Login ID field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.adminRole)) {
                error["adminRole"] = `Admin Role field is required`;
                ret = false;
            }
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            name: _entity?.name,adminId: _entity?.adminId,supermarketId: _entity?.supermarketId,phone: _entity?.phone,loginId: _entity?.loginId,adminRole: _entity?.adminRole,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("admin").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Admin created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Admin" });
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
        <Dialog header="Create Admin" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="admin-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="name">Name:</label>
                <InputText id="name" className="w-full mb-3 p-inputtext-sm" value={_entity?.name} onChange={(e) => setValByKey("name", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["name"]) ? (
              <p className="m-0" key="error-name">
                {error["name"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="adminId">Admin ID:</label>
                <InputText id="adminId" className="w-full mb-3 p-inputtext-sm" value={_entity?.adminId} onChange={(e) => setValByKey("adminId", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["adminId"]) ? (
              <p className="m-0" key="error-adminId">
                {error["adminId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="supermarketId">Supermarket ID:</label>
                <InputText id="supermarketId" className="w-full mb-3 p-inputtext-sm" value={_entity?.supermarketId} onChange={(e) => setValByKey("supermarketId", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["supermarketId"]) ? (
              <p className="m-0" key="error-supermarketId">
                {error["supermarketId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="phone">Phone:</label>
                <InputNumber id="phone" className="w-full mb-3 p-inputtext-sm" value={_entity?.phone} onChange={(e) => setValByKey("phone", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["phone"]) ? (
              <p className="m-0" key="error-phone">
                {error["phone"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="loginId">Login ID:</label>
                <InputText id="loginId" className="w-full mb-3 p-inputtext-sm" value={_entity?.loginId} onChange={(e) => setValByKey("loginId", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["loginId"]) ? (
              <p className="m-0" key="error-loginId">
                {error["loginId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="adminRole">Admin Role:</label>
                <InputText id="adminRole" className="w-full mb-3 p-inputtext-sm" value={_entity?.adminRole} onChange={(e) => setValByKey("adminRole", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["adminRole"]) ? (
              <p className="m-0" key="error-adminRole">
                {error["adminRole"]}
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

export default connect(mapState, mapDispatch)(AdminCreateDialogComponent);
