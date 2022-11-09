import React, { useState } from "react";
import "./Profile.css";
import { useForm } from "react-hook-form";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [notEditMode, setNotEditMode] = useState(true);
  const [saveButtonName, setSaveButtonName] = useState("");

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

  const editButtonName = `profile__edit ${
    !notEditMode ? "profile__edit_disabled" : ""
  }`;

  const exitButtonName = `profile__exit ${
    !notEditMode ? "profile__edit_disabled" : ""
  }`;

  React.useEffect(() => {
    if (notEditMode) {
      setSaveButtonName("profile__save profile__save_hidden");
    } else if (!notEditMode && !isValid) {
      setSaveButtonName("profile__save profile__save_disabled");
    } else if (!notEditMode && isValid) {
      setSaveButtonName("profile__save");
    }
  }, [isValid, notEditMode]);

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
                required: true,
                disabled: notEditMode ? true : false,
                pattern: /^([A-Za-zА-Яа-яЁё\s-]){2,30}$/,
                minlength: 2,
                maxlength: 30,
              })}
              className="profile__input"
              defaultValue={currentUser.name}
            />
          </li>

          <li className="profile__info">
            <label className="profile__text">E-mail</label>

            <input
              {...register("email", {
                required: true,
                disabled: notEditMode ? true : false,
                pattern:
                  /^(?!.{65})([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0-9_\-.+]+)@([a-z0-9]+)((([.]?|[_-]{0,2})[a-z0-9]+)*)\.([a-z]{2,})$/,
              })}
              className="profile__input"
              defaultValue={currentUser.email}
            />
          </li>
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
        <button type="submit" className={saveButtonName} disabled={!isValid}>
          <p className="profile__save-text">Сохранить</p>
        </button>
      </form>
    </section>
  );
}

export default Profile;
