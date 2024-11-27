import { MusicNote } from "styled-icons/material";
import { CiFolderOn, CiFloppyDisk } from "react-icons/ci";
import TitleEdit from "../../../components/TitleEdit";
import * as S from "../styles";
import { Link } from "react-router-dom";
import DropDownMenu from "../../../components/Dropdown";
import ThemeToggle from "../../../components/ThemeToggle";
import React from "react";

interface HeaderContentProps {
    editMode: boolean
    postMusic: () => Promise<void>
    theme: any
    options: {
        render: JSX.Element;
        icon: JSX.Element;
        id: number;
    }[]
    title: string
    setTitle: React.Dispatch<React.SetStateAction<string>>
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
    setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>
    showDropdown: boolean
}

export const HeaderContent = ({

    editMode,
    options,
    postMusic,
    theme,
    setEditMode,
    setTitle,
    title,
    setShowDropdown,
    showDropdown
}: HeaderContentProps) => {

    return (
        <>
            <S.Title>
                <MusicNote
                    style={{
                        marginRight: 8
                    }}
                    className="note-icon"
                    color={theme.text}
                    size={20}
                />
                {!editMode ? (
                    <label onClick={() => setEditMode(true)}>
                        {title}
                    </label>
                ) : (
                    <TitleEdit
                        title={title}
                        setTitle={setTitle}
                        setShow={setEditMode}
                    />
                )}
            </S.Title >

            {!editMode ? (
                <>
                    <CiFloppyDisk
                        onClick={() => postMusic()}
                        color={theme.text}
                        size={24}
                        style={{
                            marginRight: 8,
                        }}
                    />
                    <Link to="/">
                        <CiFolderOn
                            color={theme.text}
                            size={24}
                            style={{
                                marginRight: 8,
                                marginTop: 8,
                            }}
                        />
                    </Link>
                    <ThemeToggle />
                    <DropDownMenu

                        isActive={showDropdown}
                        setIsActive={setShowDropdown}
                        options={options} style={{
                            marginLeft: 8,
                            marginRight: -8,
                        }} />
                </>
            ) : null
            }
        </>
    )
}