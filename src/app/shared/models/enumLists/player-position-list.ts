import { PlayerPositions } from '../../enums/playerPositions.enum';

export class PlayerPositionList {
    playerPosition = PlayerPositions;

    playerPositionList : PlayerPositions[] = [];

    setPlayerPositionList(){
        this.playerPositionList.push(this.playerPosition.Arquero);
        this.playerPositionList.push(this.playerPosition.Defensa);
        this.playerPositionList.push(this.playerPosition.Delantero);
        this.playerPositionList.push(this.playerPosition.Mediocampista);
        this.playerPositionList.push(this.playerPosition.Volante);
        return this.playerPositionList;
    }

    getPlayerPositionList(): PlayerPositions[]{
        return this.setPlayerPositionList();
    }

}
