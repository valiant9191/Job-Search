import { Box, Group } from '@mantine/core';
import { VacancyShortComponent } from "../../components/vacancyShortComponent";
import { FormPrimarySearchComponent } from "../../components/formPrimarySearchComponent";
import { SearchFilterComponent } from "../../components/searchFilterComponent";
import styles from './searcJobList.module.css'


function SearchJobList() {


    return (
        <Group className={styles.container} >
            <Box className={styles.searchBox} w='50%' p='2rem' mx="auto" mt='1.2rem'>
                <SearchFilterComponent />
                <FormPrimarySearchComponent />
            </Box>

            <div>
                <ul>
                    <li><VacancyShortComponent /></li>
                    <li><VacancyShortComponent /></li>
                    <li><VacancyShortComponent /></li>
                </ul>
            </div>
        </Group >
    )
}
export { SearchJobList };