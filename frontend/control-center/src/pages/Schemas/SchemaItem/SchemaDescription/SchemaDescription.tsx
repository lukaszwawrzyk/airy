import React, {MutableRefObject, useEffect, useState} from 'react';
import {getSchemaInfo} from '../../../../actions';
import {connect, ConnectedProps} from 'react-redux';
import {ErrorPopUp} from 'components';
import {calculateHeightOfCodeString} from '../../../../services';
import SchemaSection from './SchemaSection';
import styles from './index.module.scss';
import {MessageSection, lastMessageMock} from './MessageSection';

const mapDispatchToProps = {
  getSchemaInfo,
};

const connector = connect(null, mapDispatchToProps);

type SchemaDescriptionProps = {
  schemaName: string;
  code: string;
  setCode: (code: string) => void;
  wrapperSection: MutableRefObject<any>;
  version: number;
} & ConnectedProps<typeof connector>;

const SchemaDescription = (props: SchemaDescriptionProps) => {
  const {schemaName, code, setCode, getSchemaInfo, wrapperSection, version} = props;

  useEffect(() => {
    getSchemaInfo(schemaName).catch(() => {
      getSchemaInfo(schemaName + '-value');
    });
  }, []);

  useEffect(() => {
    window.addEventListener('themeChanged', () => {
      const theme = localStorage.getItem('theme');
      setEditorMode(theme ? 'vs-dark' : 'vs');
    });
  }, []);

  const [isEditMode, setIsEditMode] = useState(false);
  const [firstTabSelected, setFirstTabSelected] = useState(true);
  const [showErrorPopUp, setShowErrorPopUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [editorMode, setEditorMode] = useState(localStorage.getItem('theme') === 'dark' ? 'vs-dark' : 'vs');

  useEffect(() => {
    if (firstTabSelected) {
      recalculateContainerHeight(code);
    } else {
      recalculateContainerHeight(lastMessageMock);
    }
  }, [firstTabSelected, code]);

  const setNewSchemaCode = (text: string) => {
    setCode(text);
  };

  const recalculateContainerHeight = (code: string) => {
    const basicHeight = 50;
    const headerHeight = 32;
    if (wrapperSection && wrapperSection.current) {
      wrapperSection.current.style.height = `${calculateHeightOfCodeString(code) + headerHeight + basicHeight}px`;
    } else {
      wrapperSection.current.style.height = `${basicHeight}px`;
    }
  };

  return (
    <div className={`${isEditMode ? styles.containerEdit : styles.containerNoEdit}`} onClick={e => e.stopPropagation()}>
      {firstTabSelected ? (
        <SchemaSection
          schemaName={schemaName}
          code={code}
          setCode={setNewSchemaCode}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          setFirstTabSelected={setFirstTabSelected}
          editorMode={editorMode}
          recalculateContainerHeight={recalculateContainerHeight}
          setErrorMessage={setErrorMessage}
          setShowErrorPopUp={setShowErrorPopUp}
          version={version}
        />
      ) : (
        <MessageSection
          code={code}
          setFirstTabSelected={setFirstTabSelected}
          editorMode={editorMode}
          recalculateContainerHeight={recalculateContainerHeight}
        />
      )}
      {showErrorPopUp && <ErrorPopUp message={errorMessage} closeHandler={() => setShowErrorPopUp(false)} />}
    </div>
  );
};

export default connector(SchemaDescription);
