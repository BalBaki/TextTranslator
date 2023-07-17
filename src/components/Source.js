import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import { changeSourceSearchTerm, changeText, changeSourceLanguage } from '../store';
import Languages from './Languages';

export default function Source() {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);

    const { language, text, searchTerm } = useSelector(({ source }) => source);

    const handleOpenClick = () => {
        setIsOpen((current) => !current);

        !isOpen && dispatch(changeSourceSearchTerm(''));
    };

    const handleTextChange = (event) => {
        dispatch(changeText(event.target.value));
    };

    return (
        <div>
            <div className="flex justify-center">
                <div className="mt-3 w-full">
                    <div className="flex items-center justify-between border-solid border-2" onClick={handleOpenClick}>
                        <div className="ml-2">{language?.name || 'Dil Seçiniz...'}</div>
                        <div className="text-2xl">{isOpen ? <GoChevronDown /> : <GoChevronLeft />}</div>
                    </div>
                    {isOpen && (
                        <Languages
                            open={setIsOpen}
                            term={searchTerm}
                            changeLanguage={changeSourceLanguage}
                            changeTerm={changeSourceSearchTerm}
                        />
                    )}
                    <textarea
                        type="text"
                        value={text}
                        className="border-solid border-2 h-60 w-full mt-1 resize-none p-1"
                        onChange={handleTextChange}
                    />
                </div>
            </div>
        </div>
    );
}
