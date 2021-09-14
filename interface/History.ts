import MenuIcon from '@material-ui/icons/Menu';

export interface CompanyMetaData {
    Icon: typeof MenuIcon,
    CompanyName: String,
    Start: Date,
    End: Date,
    AwardId: Array<Number>
}

export interface SchoolMetaData {
    Icon: typeof MenuIcon,
    SchoolName: String,
    Enter: Date,
    Graduate: Date,
    AwardId: Array<Number>
}