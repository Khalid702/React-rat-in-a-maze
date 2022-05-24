import { Grid, Box, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from 'react';

import Cell from './Cell';

function ratmaze(maze,y,x,trail,routes,success){
  if(y == 3 && x == 3){
     success.push(trail);  
     if(routes.length !== 0){
       let route = routes.pop();
        let newTrail = trail.filter((num,i) => i < route.len);
        newTrail.push({y:route.y,x:route.x}); 
       return ratmaze(maze, route.y, route.x,newTrail,routes,success);   
     }else{
      return success;
     }   
  }
   
  else if(y < 3 && maze[y+1][x] == 1){
     if (x < 3 && maze[y][x+1] == 1){
        let a = y; let b = x;
         routes.push({y: a, x: b+1, len:trail.length});
     }  
       let a = y + 1; let b = x;
       trail.push({y: a,x:b});
      return ratmaze(maze,a,b,trail,routes,success)
  }  
   else if(x < 3 && maze[y][x+1] == 1){
       let a = y; let b = x+1;
       trail.push({y: a,x:b});
      return ratmaze(maze,a,b,trail,routes,success)
  }else {
    if(routes.length === 0){
         return [];  
       }
       let route = routes.pop();
        let newTrail = trail.filter((num,i) => i < route.len);
        newTrail.push({y:route.y,x:route.x}); 
       return ratmaze(maze, route.y, route.x,newTrail,routes,success); 
   }    
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    'background-color': 'orange'
  },
 
}));


function Maze(props) {
   const [paths, setPaths] = useState([]);
   const classes = useStyles();
  
  useEffect(() => {
    setPaths(ratmaze(props.matrix,0,0,[],[],[]));
  }, [props.matrix])

  console.log(paths);

     return (
       <div classes={classes.root}>
       <Grid container style={{backgroundColor: 'orange'}} justify='center'>
         <Box p={8}>
         <Grid container style={{backgroundColor: 'orange', padding: '20px'}} justify='center'>
          <Grid style={{backgroundColor: 'black'}} container='row' spacing={0} item sm={3}>
            <Cell array={props.matrix} route={[]}/>
	       </Grid>
        </Grid> 
        <Grid container style={{backgroundColor: 'orange'}} justify='center'>
           <Typography gutter bottom variant='subtitle1'> Initial Maze </Typography>
         </Grid>
        </Box> 
         <Grid container style={{backgroundColor: 'orange', padding: '20px'}} justify='center'>
           <Typography gutterBottom variant='subtitle1'> 
              Total Paths - {paths.length}
            </Typography>
         </Grid>
         { 
           paths.map((path, index) => {
           return (
            paths.length &&  <Grid
               key={(index + 1).toString()}
               style={{backgroundColor:  'black', margin: '20px'}}
               container='row'
               direction='row'
               spacing={5}
               item
               sm={3}
              >
               <Cell array={props.matrix} route={paths[index]}  />
         
             </Grid>
            )
         })

         }
        </Grid>    
        </div>
    );
  }

  export default Maze;