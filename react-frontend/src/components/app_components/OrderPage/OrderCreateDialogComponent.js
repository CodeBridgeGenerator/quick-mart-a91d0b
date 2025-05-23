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

const OrderCreateDialogComponent = (props) => {
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
          
            if (_.isEmpty(_entity?.customerId)) {
                error["customerId"] = `Customer ID field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.supermarketId)) {
                error["supermarketId"] = `Supermarket ID field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.status)) {
                error["status"] = `Status field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.paymentMethod)) {
                error["paymentMethod"] = `Payment Method field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.deliveryMethod)) {
                error["deliveryMethod"] = `Delivery Method field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.orderId)) {
                error["orderId"] = `Order ID field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.taxId)) {
                error["taxId"] = `Tax ID field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.couponId)) {
                error["couponId"] = `Coupon ID field is required`;
                ret = false;
            }
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            customerId: _entity?.customerId,supermarketId: _entity?.supermarketId,totalPrice: _entity?.totalPrice,status: _entity?.status,paymentMethod: _entity?.paymentMethod,deliveryMethod: _entity?.deliveryMethod,orderId: _entity?.orderId,subTotal: _entity?.subTotal,taxId: _entity?.taxId,couponId: _entity?.couponId,shippingTotal: _entity?.shippingTotal,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("order").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Order created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Order" });
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
        <Dialog header="Create Order" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="order-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="customerId">Customer ID:</label>
                <InputText id="customerId" className="w-full mb-3 p-inputtext-sm" value={_entity?.customerId} onChange={(e) => setValByKey("customerId", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["customerId"]) ? (
              <p className="m-0" key="error-customerId">
                {error["customerId"]}
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
                <label htmlFor="totalPrice">Total Price:</label>
                <InputNumber id="totalPrice" className="w-full mb-3" mode="currency" currency="MYR" locale="en-US" value={_entity?.totalPrice} onValueChange={(e) => setValByKey("totalPrice", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["totalPrice"]) ? (
              <p className="m-0" key="error-totalPrice">
                {error["totalPrice"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="status">Status:</label>
                <InputText id="status" className="w-full mb-3 p-inputtext-sm" value={_entity?.status} onChange={(e) => setValByKey("status", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["status"]) ? (
              <p className="m-0" key="error-status">
                {error["status"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="paymentMethod">Payment Method:</label>
                <InputText id="paymentMethod" className="w-full mb-3 p-inputtext-sm" value={_entity?.paymentMethod} onChange={(e) => setValByKey("paymentMethod", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["paymentMethod"]) ? (
              <p className="m-0" key="error-paymentMethod">
                {error["paymentMethod"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="deliveryMethod">Delivery Method:</label>
                <InputText id="deliveryMethod" className="w-full mb-3 p-inputtext-sm" value={_entity?.deliveryMethod} onChange={(e) => setValByKey("deliveryMethod", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["deliveryMethod"]) ? (
              <p className="m-0" key="error-deliveryMethod">
                {error["deliveryMethod"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="orderId">Order ID:</label>
                <InputText id="orderId" className="w-full mb-3 p-inputtext-sm" value={_entity?.orderId} onChange={(e) => setValByKey("orderId", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["orderId"]) ? (
              <p className="m-0" key="error-orderId">
                {error["orderId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="subTotal">Subtotal:</label>
                <InputNumber id="subTotal" className="w-full mb-3" mode="currency" currency="MYR" locale="en-US" value={_entity?.subTotal} onValueChange={(e) => setValByKey("subTotal", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["subTotal"]) ? (
              <p className="m-0" key="error-subTotal">
                {error["subTotal"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="taxId">Tax ID:</label>
                <InputText id="taxId" className="w-full mb-3 p-inputtext-sm" value={_entity?.taxId} onChange={(e) => setValByKey("taxId", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["taxId"]) ? (
              <p className="m-0" key="error-taxId">
                {error["taxId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="couponId">Coupon ID:</label>
                <InputText id="couponId" className="w-full mb-3 p-inputtext-sm" value={_entity?.couponId} onChange={(e) => setValByKey("couponId", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["couponId"]) ? (
              <p className="m-0" key="error-couponId">
                {error["couponId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="shippingTotal">Shipping:</label>
                <InputNumber id="shippingTotal" className="w-full mb-3" mode="currency" currency="MYR" locale="en-US" value={_entity?.shippingTotal} onValueChange={(e) => setValByKey("shippingTotal", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["shippingTotal"]) ? (
              <p className="m-0" key="error-shippingTotal">
                {error["shippingTotal"]}
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

export default connect(mapState, mapDispatch)(OrderCreateDialogComponent);
