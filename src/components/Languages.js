import { useDispatch } from 'react-redux';
import { GoSearch } from 'react-icons/go';
import { useFetchLanguagesQuery } from '../store';

export default function Languages({ open, term, changeLanguage, changeTerm }) {
    const { data, isLoding, error } = useFetchLanguagesQuery();
    const dispatch = useDispatch();

    const handleClick = (language) => {
        dispatch(changeLanguage(language));

        dispatch(changeTerm(''));
        open(false);
    };
    const handleTermChange = (event) => {
        dispatch(changeTerm(event.target.value));
    };

    let renderedList = (data?.data?.languages || [])
        .filter((lang) => lang.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
        .map((lang) => {
            return (
                <div
                    key={lang.language}
                    className="px-4 py-1 min-w-[6.5rem] basis-1/3 text-slate-300 cursor-pointer
                         hover:bg-slate-500 rounded"
                    onClick={() => handleClick(lang)}
                >
                    {lang.name}
                </div>
            );
        });

    return (
        <div className="w-full max-w-lg absolute short:pr-4">
            <div className="relative flex items-center">
                <input
                    type="text"
                    className="border-solid border-2 border-neutral-950 w-full pr-7 pl-2"
                    value={term}
                    onChange={handleTermChange}
                />
                <GoSearch className="absolute right-2 text-xl text-slate-600" />
            </div>
            <div className="bg-slate-600 h-56 overflow-y-auto">
                <div className="flex items-center flex-wrap">{renderedList}</div>
            </div>
        </div>
    );
}
