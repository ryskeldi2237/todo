import React, {FC, useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import Store from '../store/store'
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '1300px',
      margin: ' 0 10px',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);
export const CheckboxList:FC = observer(() => {
  const classes = useStyles();
  useEffect(() => {
    return () => {
      Store.report()
    }
  }, [])
  return (
    <div>
      <h1>Completed tasks : {Store.count}</h1>
      <List className={classes.root && 'wrapper'}>
        {Store.sort.map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem className={value.done ? 'compleated items' : 'items'}>
              {
                value.done ?
                  <div className="checked" onClick={() => Store.changeCompleate(value.id)}>
                    <CheckIcon></CheckIcon>
                  </div>
                  :
                  <div className="checking" onClick={() => Store.changeCompleate(value.id)}></div>
              }
              <ListItemText id={labelId} primary={value.title} />
              <ListItemSecondaryAction onClick={() => Store.removeItem(value.id)}>
                <DeleteIcon></DeleteIcon>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
})