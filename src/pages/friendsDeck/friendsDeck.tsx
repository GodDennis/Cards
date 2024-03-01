import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Pagination} from '@/components/ui/pagination'
import {HeadCellProps} from '@/components/ui/table/THeader'
import {Typography} from '@/components/ui/typography'

import s from './friendsDeck.module.scss'
import {BackwardLink} from "@/components/ui/backward-link";
import {MyDeckTable} from "@/pages/myDeck/myDeckTable/myDeckTable";
import {decks} from "@/pages/myDeck";

export const FriendsDeck = () => {
    return (
        <div className={s.container}>
            <div>
                <BackwardLink to={'https://google.com'} variant={'body2'} className={s.linkBack}>Back to Decks
                    List</BackwardLink>
            </div>
            <div className={s.sectionHeader}>
                <Typography variant={'h1'}>Friend's Deck</Typography>
                <Button>Add New Card</Button>
            </div>
            <div className={s.deskActions}>
                <Input className={s.search} variant={'search'} placeholder={'Input search'}/>
            </div>
            <MyDeckTable className={s.table} decks={decks} head={columns} withSettings={false}/>
            <Pagination/>
        </div>
    )
}

const columns: HeadCellProps[] = [
    {key: 'question', title: 'Question'},
    {key: 'answer', title: 'Answer'},
    {key: 'lastUpdated', title: 'Last Updated'},
    {key: 'grade', title: 'Grade'},
]


