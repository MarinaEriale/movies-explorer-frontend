import React, { useState } from "react";
import "./Profile.css";
import { useForm } from "react-hook-form";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [notEditMode, setNotEditMode] = useState(true);
  const [saveButtonName, setSaveButtonName] = useState("");
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [isSavedButtonActive, setIsSavedButtonActive] = useState(false);

  function handleEditClick() {
    setNotEditMode(false);
  }

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  console.log(isValid);
  console.log(errors);

  console.log(saveButtonName);

  function handleInputChangeName(e) {
    setName(e.target.value);
  }

  function handleInputChangeEmail(e) {
    setEmail(e.target.value);
  }

  const editButtonName = `profile__edit ${
    !notEditMode ? "profile__edit_disabled" : ""
  }`;

  const exitButtonName = `profile__exit ${
    !notEditMode ? "profile__edit_disabled" : ""
  }`;

  React.useEffect(() => {
    if (notEditMode) {
      setSaveButtonName("profile__save profile__save_hidden");
      setIsSavedButtonActive(false);
    } else if (!notEditMode && !isValid) {
      setSaveButtonName("profile__save profile__save_disabled");
      setIsSavedButtonActive(false);
    } else if (!notEditMode && isValid && name === currentUser.name && email === currentUser.email) {
      setSaveButtonName("profile__save profile__save_disabled");
      setIsSavedButtonActive(false);
    }
    else if (!notEditMode && isValid && (name !== currentUser.name || email !== currentUser.email)) {
      setSaveButtonName("profile__save");
      setIsSavedButtonActive(true);
    }
  }, [currentUser.email, currentUser.name, email, isValid, name, notEditMode]);

  const profileTextNameForName = `profile__input ${
    errors.name ? "profile__input_mistaken" : ""
  }`;

  const profileTextNameForEmail = `profile__input ${
    errors.email ? "profile__input_mistaken" : ""
  }`;

  // function handleInform() {
  //   if (!notEditMode && props.editSuccess) {
  //     setProfileSuccessName("profile__succsess profile__success_active");
  //     setTimeout(() => {
  //       setProfileSuccessName("profile__succsess");
  //       setNotEditMode(true);
  //     }, 2000);
  //   }
  // }

  return (
    <section className="profile">
      <form
        className="profile__data"
        onSubmit={handleSubmit(props.handleProfileUpdate)}
      >
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <ul className="profile__container">
          <li className="profile__info">
            <label>
              <p className="profile__text">Имя</p>
            </label>
            <input
              {...register("name", {
                required: "Обязательно укажите имя",
                disabled: notEditMode ? true : false,
                pattern: {
                  value: /^([A-Za-zА-Яа-яЁё\s-]){2,30}$/,
                  message: "Используйте кириллицу, латиницу и пробел",
                },
                minLength: {
                  value: 2,
                  message: "Имя должно быть не короче 2 символов",
                },
                maxLength: {
                  value: 30,
                  message: "Имя не должно быть длиннее 30 символов",
                },
                onChange: (e) => {
                  handleInputChangeName(e);
                },
              })}
              className={profileTextNameForName}
              defaultValue={currentUser.name}
            />
          </li>
          <div className="profile__error">
            {errors?.name && (
              <p className="profile__error-text">
                {errors?.name?.message || "Ошибка введенных данных"}
              </p>
            )}
          </div>
          <li className="profile__info">
            <label className="profile__text">E-mail</label>
            <input
              {...register("email", {
                required: "Обязательно укажите e-mail",
                disabled: notEditMode ? true : false,
                pattern: {
                  value:
                    /^(?!.{65})([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0-9_\-.+]+)@([a-z0-9]+)((([.]?|[_-]{0,2})[a-z0-9]+)*)\.([a-z]{2,})$/,
                  message: "Введите e-mail в формате example@mail.com",
                },
                onChange: (e) => {
                  handleInputChangeEmail(e);
                },
              })}
              className={profileTextNameForEmail}
              defaultValue={currentUser.email}
            />
          </li>
          <div className="profile__error">
            {errors?.email && (
              <p className="profile__error-text">
                {errors?.email?.message || "Ошибка введенных данных"}
              </p>
            )}
          </div>
        </ul>
        <button
          type="button"
          className={editButtonName}
          onClick={handleEditClick}
        >
          Редактировать
        </button>
        <button
          type="button"
          className={exitButtonName}
          onClick={props.onLogout}
        >
          Выйти из аккаунта
        </button>
        <button type="submit" className={saveButtonName} disabled={!isSavedButtonActive}>
          <p className="profile__save-text">Сохранить</p>
        </button>
        {props.editSuccess && (
          <p className="profile__success">Данные успешно сохранены</p>
        )}
      </form>
    </section>
  );
}

export default Profile;
