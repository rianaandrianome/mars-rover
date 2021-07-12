import React, { useState } from 'react';
import  { ReactComponent as Compass } from '../../assets/images/compass.svg';

interface PanelProps {
  commands: Array<string>;
  direction: any;
  position: any;
  gridSize: any;
  move: any;
}

const StatusPanel = (props: PanelProps) => {
  const [direction, setDirection] = useState(props.direction);
  const [position, setPosition] = useState(props.position);
  const [history, setHistory] = useState('');
  
  const handleChange = (command:string) => {
    let dir = direction;
    let pos = {
      ...position
    };

    switch (command) {
      case "f": 
        switch (direction) {
          case "N":
            if (pos.y < 0) {
              pos.y += 1;
              setPosition({...pos, y: pos.y});
            }
            break;
          case "W":
            if (pos.x > 0) {
              pos.x -= 1;
              setPosition({...pos, x: pos.x});
            }
            break;
          case "S":
            if (pos.y > -props.gridSize.height) {
              pos.y -= 1;
              setPosition({...pos, y: pos.y});
            }
            break;
          case "E":
            if (pos.x < props.gridSize.width) {
              pos.x += 1;
              setPosition({...pos, x: pos.x});
            }
            break;
        }
        break;
      case "l":
        switch (direction) {
          case "N" : 
            setDirection("W");
            dir = "W";
            break;
          case "W" : 
            setDirection("S");
            dir = "S";
            break;
          case "S" : 
            setDirection("E");
            dir = "E";
            break;
          case "E" : 
            setDirection("N");
            dir = "N";
            break;
        }
        break;
      case "r": 
        switch (direction) {
          case "N" : 
            setDirection("E");
            dir = "E";
            break;
          case "E" : 
            setDirection("S");
            dir = "S";
            break;
          case "S" : 
            setDirection("W");
            dir = "W";
            break;
          case "W" : 
            setDirection("N");
            dir = "N";
            break;
        }
        break;
    }

    return props.move(dir, pos);

  };

  return (
    <div className="statusPanel" data-testid="statuspanel">
      <h1>STATUS PANEL</h1>
      <div className="row coordinates-wrapper">
        <div className="col-lg-6 col-md-6 col-sm-6 dir-pos-wrapper">
          <p>
            Current Direction <br />
            <span data-testid="direction">{direction}</span>
          </p>
          <p>
            Current Position <br />
            <span data-testid="coordinates">{`(${position.x}, ${position.y})`}</span>
          </p>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 compass-wrapper">
          <Compass />
        </div>
      </div>
      
      <p className="text-center">Move the rover by typing either (f) forward, (r) right, or (l) left</p>
      <input
        data-testid="inputCommand"
        type="text"
        className="form-control"
        placeholder="👽 Please type here to move the rover 👽"
        onChange={(e) => {
          const value = e.target.value;
          const regex = `^[${props.commands.toString().replace(/,/g, '')}]+$`;
    
          if ((new RegExp(regex)).test(value)) {
            const lastLetter = value.substring(value.length - 1);
            handleChange(lastLetter);
            setHistory(`${history}${lastLetter}`);
          } 
        }}
        onPaste={(e) => {
          e.preventDefault();
          return false;
        }}
      />

      <h1>Commands History</h1>
      <p className="txt-history" data-testid="txtHistory">
        {history.toUpperCase()}
      </p>
    </div>
  );
};

export default StatusPanel;