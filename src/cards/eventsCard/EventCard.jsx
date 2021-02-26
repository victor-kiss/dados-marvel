import React from 'react'

import FlexDiv from '../../patterns/FlexDiv'
import DropdownData from '../seriesCard/DropdownData'

import {Card,NameArea,Name,Id, Image, DescriptionArea} from '../style'


export default function eventsCard({data}) {

    return (
        <FlexDiv direction="column" justify="center" align="center">
            {
                data.data.results.map(data =>
                    <Card key={data.title}>
                        <NameArea>
                            <Name>Nome: {data.title}</Name>
                            <Id>Identificação: {data.id}</Id>
                            <Id>tipo de dado: eventos</Id>
                        </NameArea>
                        <Image src={data.thumbnail.path+"."+data.thumbnail.extension} alt="character image"/>

                        <DescriptionArea>
                            {
                            data.description === "" ? "Oh não, parece que estamos sendo atacados, alguns dos nossos dados sobre nossos heróis estão desaparecendo! Aposto que isso é obra da Hidra..." : data.description
                            }
                        </DescriptionArea>
                        <DropdownData title="Personagens"
                        data={data.characters.items}/>

                        <DropdownData title="Histórias em Quadrinhos"
                        bgColor="#282A2D" 
                        data={data.comics.items}/>
                    
                         <DropdownData title="Séries"
                        bgColor="#2E3134" 
                        data={data.series.items}/>
                    </Card>    
                )
            }
        </FlexDiv>
    )
}