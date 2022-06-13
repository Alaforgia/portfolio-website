import classes from './Layout.module.css';
import Navigation from './Navigation';
function Layout(props: any) {
  return (
    <div>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;