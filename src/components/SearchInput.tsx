import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {FormEvent, useRef} from "react";

interface Props {
    onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
    const search = useRef<HTMLInputElement>(null);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (search.current) {
            onSearch(search.current.value);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={search} borderRadius={20} placeholder='Search games...' variant='filled' />
            </InputGroup>
        </form>
    );
}

export default SearchInput;