import React from "react";
import LightNavbar from "../componenets/CommonComponents/LightNavbar";
import Footer from "../componenets/CommonComponents/Footer";
import Header from "../componenets/WritterDetailFormComponents/WritterDetailsHeader";
import Body from "../componenets/WritterDetailFormComponents/WriterDetailForm";
import { useSelector,useDispatch } from "react-redux";
import {setupGetCurrentWriter}  from "../features/writerRequest/writerRequestSlice"
import CircularProgress from '@mui/material/CircularProgress';

const WriterDetailForm = () => {
  let dispatch=useDispatch()
  let {isLoading}=useSelector((state)=>state.writerRequest)
  
  React.useEffect(() => {
    dispatch(setupGetCurrentWriter());
  }, []);

  if(isLoading){
    return  <CircularProgress />
  }
  
  return (
    <div>
      <LightNavbar signIn={true} getStarted={true} />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default WriterDetailForm;
