import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width:"1000px",
    height: '250px'
  },
  paper: {
    padding: '30px',
    margin: '1px',
    'border-radius': '0px',
     background: 'white'
  },
   blocked: {
    background: 'red',
    padding: '30px',
    'border-radius': '0px',
    margin:'1px'
  },
  path: {
    background: 'green',
     padding: '30px',
    'border-radius': '0px',
     margin:'1px'

  },
  mouse: {
   "background-image": "url('../mouse.png')",
  'background-attachment': 'fixed',
  'background-size': 'cover',
   overflow: 'hidden',
   padding: '30px',
   'border-radius': '0px',
    background: 'white',
    margin:'1px'


  },
  icon: {
    overflow: 'hidden',
    'text-align': 'center',
     padding: '7px',
    'border-radius': '0px',
     background: 'white',
      margin:'1px',
      'font-size': '32px',
      'padding-bottom': '11px'

  },

}));

function Cell(props) {
  const classes = useStyles();
  
  const customizeCell = (pos,index) => {
   
   if(pos === 3 && index == 3){
       return classes.cheese
    }
     else if(pos === 0 && index == 0){
       return classes.mouse
    }
    else if(props.array[pos][index] === 0){
      return classes.blocked   
    }
    else if(props.route.find(ele => ele.y == pos && ele.x == index)){
      return classes.path;
    }
   else {
    return classes.paper
   } 
  }

  return (
    <div className={classes.root}>
     <Grid container md={12}> 
      <Grid item md={3}>
            <Paper
              className={classes.icon}        
              > 
              <span className={classes.icon}>
                  🐀  
                </span> 
              </Paper>
          </Grid>

       {Array.from(Array(3)).map((_, index) => (

          <Grid item md={3}>
            <Paper
              className={customizeCell(0,index+1)}        
      
               >   </Paper>
          </Grid>
        ))} 

       {Array.from(Array(4)).map((_, index) => (
          <Grid item md={3}>
            <Paper
              className={customizeCell(1,index)}        
            >  </Paper>
          </Grid>
        ))} 

       {Array.from(Array(4)).map((_, index) => (
          <Grid item md={3}>
            <Paper
              className={customizeCell(2,index)}        
             >   </Paper>
          </Grid>
        ))} 
        
        {Array.from(Array(3)).map((_, index) => (
          <Grid item md={3}>
            <Paper
              className={customizeCell(3,index)}        
             >    </Paper>
         </Grid>
        ))} 

        <Grid item md={3}>
            <Paper
              className={classes.icon}        
              > 
              <span className={classes.icon}>
                🧀 
                </span> 
              </Paper>
          </Grid>

     </Grid>
    </div>
  );
}


export default Cell;