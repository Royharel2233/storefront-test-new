import React from "react";

// import styled from "styled-components";
import { styled } from "@styles";

export const Wrapper = styled.div`
  width: 80%;
  padding-bottom: 2rem;
`;

export const Header = styled.div`
  font-size: ${props => props.theme.typography.h4FontSize};
  font-weight: ${props => props.theme.typography.boldFontWeight};
  padding-bottom: 1.5rem;
`;

export const Checkbox = styled.div`
  display: inline-block;
  > input {
    opacity: 0;
  }
  > label {
    font-family: Lato;
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.3px;
    color: #737680;
  }
  > input + label {
    position: relative; /* permet de positionner les pseudo-éléments */
    padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
    cursor: pointer; /* affiche un curseur adapté */
    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 1px;
      width: 17px;
      width: 17.2px;
      height: 17.1px;
      background: #343538;
      border-radius: 3px; /* angles arrondis */
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3); /* légère ombre interne */
    }
    &:after {
      content: "✓";
      position: absolute;
      top: -3px;
      left: 2px;
      font-size: 16px;
      color: #ffffff;
      transition: all 0.2s;
    }
  }
  > input:not(:checked) + label {
    &:after {
      opacity: 0; /* coche invisible */
      transform: scale(0); /* mise à l'échelle à 0 */
    }
  }
  > input:disabled:not(:checked) + label {
    &:before {
      box-shadow: none;
      border-color: #bbb;
      background-color: #ddd;
    }
  }
  > input:checked + label {
    &:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label,
  input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`;

export const BottomBorder = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.divider};
  width: 95%;
`;

export const ViewMoreButton = styled.div`
  padding-bottom: 1.25rem;
`;

export const Label = styled.label`
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
  padding-right: 1.25rem;
  input[type="checkbox"] {
    display: none;
    position: relative;
    right: -999em;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 26px;
    width: 26px;

    span {
      border: 1px solid ${props => props.theme.colors.secondary};
      width: 14px;
      height: 14px;
      display: inline-block;
      z-index: 10;
    }

    ${Checkbox}:hover & {
      border-radius: 50%;
      border: 1px solid;
      border-color: ${props => props.theme.colors.secondaryOverlay};
      background-color: ${props => props.theme.colors.secondaryOverlay};
    }

    :focus {
      border-radius: 50%;
      border: 1px solid;
      outline: none;
      border-color: ${props => props.theme.colors.secondaryOverlayDark};
      background-color: ${props => props.theme.colors.secondaryOverlayDark};
    }
  }

  input:checked + div {
    span {
      background-clip: content-box;
      padding: 2px;
      background-color: ${props => props.theme.colors.secondary};
    }
  }
`;

import {
  IFilterAttributes,
  IFilters,
  ISingleFilterAttribute,
} from "./FabricFilter";

import { ButtonLink } from "@temp/@next/components/atoms/ButtonLink/styles";

export interface IProps {
  onAttributeFiltersChange: (attributeSlug: string, value: string) => void;
  filtersLimit?: number;
  filters: IFilters;
  attribute: IFilterAttributes;
}

const ENTER_KEY: number = 13;
const SPACE_KEY: number = 32;

const checkIfAttributeIsChecked = (
  filters: IFilters,
  value: ISingleFilterAttribute,
  slug: string
) => {
  if (filters!.attributes && filters.attributes.hasOwnProperty(slug)) {
    if (filters.attributes[slug].find(filter => filter === value.slug)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const EachFilterAttr: React.FC<IProps> = ({
  attribute,
  filters,
  filtersLimit = 5,
  onAttributeFiltersChange,
}: IProps) => {
  const [viewAllOptions, setViewAllOptions] = React.useState(false);
  // const [currentAttribute] = React.useState('')
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div className="d-flex justify-content-center flex-direction-column">
      {attribute.values &&
        attribute.values.map((value, index) => {
          if (!viewAllOptions && index > filtersLimit - 1) {
            return <></>;
          } else {
            return (
              <div className="m-auto p-2">
                <Header>{attribute.name}</Header>
                <Checkbox
                  ref={ref}
                  className="p-2 m-2"
                  onClick={evt => {
                    evt.preventDefault();
                    onAttributeFiltersChange(attribute.slug, value.slug);
                    if (ref.current) {
                      ref.current.blur();
                    }
                  }}
                >
                  <input
                    tabIndex={-1}
                    type="checkbox"
                    name={attribute.slug}
                    checked={checkIfAttributeIsChecked(
                      filters,
                      value,
                      attribute.slug
                    )}
                    readOnly
                  />
                  <label>{value && value.name}</label>
                  <div
                    ref={ref}
                    tabIndex={0}
                    onKeyDown={evt => {
                      if (evt.which === SPACE_KEY || evt.which === ENTER_KEY) {
                        onAttributeFiltersChange(attribute.slug, value.slug);
                        evt.preventDefault();
                      }
                    }}
                  >
                    <span></span>
                  </div>
                </Checkbox>
              </div>
            );
          }
        })}
      <div>
        {!viewAllOptions && attribute.values.length > filtersLimit && (
          <ViewMoreButton>
            <ButtonLink
              size="sm"
              color="secondary"
              onClick={() => setViewAllOptions(true)}
            >
              VIEW ALL OPTIONS
            </ButtonLink>
          </ViewMoreButton>
        )}
      </div>
    </div>
  );
};

// const Styled = styled.div`
//   display: inline-block;
//   > input {
//     opacity: 0;
//   }
//   > label {
//     font-family: Lato;
//     font-size: 10px;
//     font-weight: 500;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: 1.6;
//     letter-spacing: 0.3px;
//     color: #737680;
//   }
//   > input + label {
//     position: relative; /* permet de positionner les pseudo-éléments */
//     padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
//     cursor: pointer; /* affiche un curseur adapté */
//     &:before {
//       content: "";
//       position: absolute;
//       left: 0;
//       top: 1px;
//       width: 17px;
//       width: 17.2px;
//       height: 17.1px;
//       background: #343538;
//       border-radius: 3px; /* angles arrondis */
//       box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3); /* légère ombre interne */
//     }
//     &:after {
//       content: "✓";
//       position: absolute;
//       top: -3px;
//       left: 2px;
//       font-size: 16px;
//       color: #ffffff;
//       transition: all 0.2s;
//     }
//   }
//   > input:not(:checked) + label {
//     &:after {
//       opacity: 0; /* coche invisible */
//       transform: scale(0); /* mise à l'échelle à 0 */
//     }
//   }
//   > input:disabled:not(:checked) + label {
//     &:before {
//       box-shadow: none;
//       border-color: #bbb;
//       background-color: #ddd;
//     }
//   }
//   > input:checked + label {
//     &:after {
//       opacity: 1; /* coche opaque */
//       transform: scale(1); /* mise à l'échelle 1:1 */
//     }
//   }
//   > input:disabled:checked + label {
//     &:after {
//       color: #999;
//     }
//   }
//   > input:disabled + label {
//     color: #aaa;
//   }
//   > input:checked:focus + label,
//   input:not(:checked):focus + label {
//     &:before {
//       border: 1px dotted blue;
//     }
//   }
// `;
