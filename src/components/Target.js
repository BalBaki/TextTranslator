import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import { changeTargetSearchTerm, changeTargetLanguage } from '../store';
import Languages from './Languages';
import Result from './Result';

export default function Target() {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);

    const { language, searchTerm } = useSelector(({ target }) => target);

    const handleOpenClick = () => {
        setIsOpen((current) => !current);

        !isOpen && dispatch(changeTargetSearchTerm(''));
    };

    return (
        <div>
            <div className="flex justify-center">
                <div className="mt-3 w-full">
                    <div className="flex items-center justify-between border-solid border-2" onClick={handleOpenClick}>
                        <div className="ml-2">{language?.name || 'Çevrilecek Dili Seçiniz...'}</div>
                        <div className="text-2xl">{isOpen ? <GoChevronDown /> : <GoChevronLeft />}</div>
                    </div>
                    {isOpen && (
                        <Languages
                            open={setIsOpen}
                            changeLanguage={changeTargetLanguage}
                            changeTerm={changeTargetSearchTerm}
                            term={searchTerm}
                        />
                    )}
                    <Result />
                </div>
            </div>
        </div>
    );
}
