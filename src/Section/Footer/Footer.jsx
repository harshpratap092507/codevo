import classes from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={classes.footerWrapper}>
        <div className={classes.about}>about</div>
        <div className={classes.product}>product</div>
        <div className={classes.category}>catrgory</div>
        <div className={classes.account}>account</div>
        <div className={classes.contact}>contact</div>
      </div>
    </>
  );
};
export default Footer;
