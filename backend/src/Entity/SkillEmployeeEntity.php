<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SkillEmployeeEntityRepository")
 */
class SkillEmployeeEntity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SkillEntity", inversedBy="skillEmployeeEntities")
     * @ORM\JoinColumn(nullable=false)
     */
    private $skill;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\EmployeeEntity")
     */
    private $employee;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $YearsOfExperience;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $details;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSkill(): ?SkillEntity
    {
        return $this->skill;
    }

    public function setSkill(?SkillEntity $skill): self
    {
        $this->skill = $skill;

        return $this;
    }

    public function getEmployee(): ?EmployeeEntity
    {
        return $this->employee;
    }

    public function setEmployee(?EmployeeEntity $employee): self
    {
        $this->employee = $employee;

        return $this;
    }

    public function getYearsOfExperience(): ?int
    {
        return $this->YearsOfExperience;
    }

    public function setYearsOfExperience(?int $YearsOfExperience): self
    {
        $this->YearsOfExperience = $YearsOfExperience;

        return $this;
    }

    public function getDetails(): ?string
    {
        return $this->details;
    }

    public function setDetails(?string $details): self
    {
        $this->details = $details;

        return $this;
    }
}
